const bcrypt = require('bcrypt');
const authConstant = require('../constants/authConstant');
const userDb = require('../data-access/userDb');
const roleDb = require('../data-access/roleDb');
const projectRouteDb = require('../data-access/projectRouteDb');
const routeRoleDb = require('../data-access/routeRoleDb');
const userRoleDb = require('../data-access/userRoleDb');
const replaceAll = require('../utils/replaceAll');

async function seedUser () {
  try {
    let userToBeInserted = {};
    userToBeInserted = {
      'password':'zj2woHBTfkUVQ0O',
      'isDeleted':false,
      'username':'Sigurd21',
      'email':'Rosemary53@gmail.com',
      'userType':authConstant.USER_TYPES.Admin
    };
    userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
    let admin = await userDb.updateOne( { 'username':'Sigurd21' }, userToBeInserted,  {
      upsert: true,
      new: true
    });
    userToBeInserted = {
      'password':'YAyU1kpjEUb7uBl',
      'isDeleted':false,
      'username':'Alicia_Blanda16',
      'email':'Gregg_Bins@gmail.com',
      'userType':authConstant.USER_TYPES.AdminSenior
    };
    userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
    let adminsenior = await userDb.updateOne( { 'username':'Alicia_Blanda16' }, userToBeInserted,  {
      upsert: true,
      new: true
    });
    userToBeInserted = {
      'password':'5LotzRRMDgU6z9J',
      'isDeleted':false,
      'username':'Rosella.Bergstrom',
      'email':'Catalina.Kub@yahoo.com',
      'userType':authConstant.USER_TYPES.SuperAdmin
    };
    userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
    let superadmin = await userDb.updateOne( { 'username':'Rosella.Bergstrom' }, userToBeInserted,  {
      upsert: true,
      new: true
    });
    userToBeInserted = {
      'password':'qFf55D4jYc1YbEC',
      'isDeleted':false,
      'username':'Jessica_Predovic',
      'email':'Kyra.Osinski@hotmail.com',
      'userType':authConstant.USER_TYPES.AgenceAdmin
    };
    userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
    let agenceadmin = await userDb.updateOne( { 'username':'Jessica_Predovic' }, userToBeInserted,  {
      upsert: true,
      new: true
    });
    userToBeInserted = {
      'password':'X27Z_ttO5mmwSFj',
      'isDeleted':false,
      'username':'Frieda.Jacobs',
      'email':'General_Gislason@hotmail.com',
      'userType':authConstant.USER_TYPES.Client
    };
    userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
    let client = await userDb.updateOne( { 'username':'Frieda.Jacobs' }, userToBeInserted,  {
      upsert: true,
      new: true
    });
    console.info('Users seeded 🍺');
  } catch (error){
    console.log('User seeder failed due to ', error.message);
  }
}
async function seedRole () {
  try {
    const roles = [ 'Client', 'Admin', 'System_User' ];
    const insertedRoles = await roleDb.findMany({ code: { '$in': roles.map(role => role.toUpperCase()) } });
    const rolesToInsert = [];
    roles.forEach(role => {
      if (!insertedRoles.find(insertedRole => insertedRole.code === role.toUpperCase())) {
        rolesToInsert.push({
          name: role,
          code: role.toUpperCase(),
          weight: 1
        });
      }
    });
    if (rolesToInsert.length) {
      const result = await roleDb.create(rolesToInsert);
      if (result) console.log('Role seeded 🍺');
      else console.log('Role seeder failed!');
    } else {
      console.log('Role is upto date 🍺');
    }
  } catch (error) {
    console.log('Role seeder failed due to ', error.message);
  }
}

async function seedProjectRoutes (routes) {
  try {
    if (routes && routes.length) {
      let routeName = '';
      const dbRoutes = await projectRouteDb.findMany({});
      let routeArr = [];
      let routeObj = {};
      routes.forEach(route => {
        routeName = `${replaceAll((route.path).toLowerCase(), '/', '_')}`;
        route.methods.forEach(method => {
          routeObj = dbRoutes.find(dbRoute => dbRoute.route_name === routeName && dbRoute.method === method);
          if (!routeObj) {
            routeArr.push({
              'uri': route.path.toLowerCase(),
              'method': method,
              'route_name': routeName,
            });
          }
        });
      });
      if (routeArr.length) {
        const result = await projectRouteDb.create(routeArr);
        if (result) console.info('ProjectRoute model seeded 🍺');
        else console.info('ProjectRoute seeder failed.');
      } else {
        console.info('ProjectRoute is upto date 🍺');
      }
    }
  } catch (error) {
    console.log('ProjectRoute seeder failed due to ', error.message);
  }
}

async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/device/api/v1/user/create',
        role: 'Client',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'Client',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'Client',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'Client',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'Client',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'Client',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'Client',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/disponibilite/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/disponibilite/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/disponibilite/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/disponibilite/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/disponibilite/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/disponibilite/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/disponibilite/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/disponibilite/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/disponibilite/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/disponibilite/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/disponibilite/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/disponibilite/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colis/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colis/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colis/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colis/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/colis/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/colis/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colis/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colis/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colis/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colis/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/colis/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/colis/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/retrait/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/retrait/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/retrait/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/retrait/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/retrait/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/retrait/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/retrait/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/retrait/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/retrait/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/retrait/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/retrait/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/retrait/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/depot/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/depot/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/depot/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/depot/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/depot/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/depot/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/depot/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/depot/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/depot/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/depot/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/depot/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/depot/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bilan/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bilan/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bilan/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bilan/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/bilan/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/bilan/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bilan/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bilan/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bilan/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bilan/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/bilan/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/bilan/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caisse/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caisse/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caisse/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caisse/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/caisse/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caisse/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caisse/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caisse/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caisse/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caisse/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caisse/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/caisse/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caveaux/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caveaux/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caveaux/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caveaux/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/caveaux/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/caveaux/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caveaux/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caveaux/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caveaux/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caveaux/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/caveaux/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/caveaux/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/partenaire/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/partenaire/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/partenaire/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/partenaire/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/partenaire/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/partenaire/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/partenaire/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/partenaire/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/partenaire/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/partenaire/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/partenaire/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/partenaire/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/agence/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/agence/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/agence/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/agence/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/agence/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/agence/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/agence/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/agence/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/agence/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/agence/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/agence/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/agence/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transfert/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transfert/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transfert/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transfert/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/transfert/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/transfert/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transfert/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transfert/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transfert/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transfert/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/transfert/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/transfert/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/codemoney/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/codemoney/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/codemoney/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/codemoney/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/codemoney/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/codemoney/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/codemoney/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/codemoney/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/codemoney/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/codemoney/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/codemoney/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/codemoney/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/qrcode/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/qrcode/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/qrcode/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/qrcode/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/qrcode/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/qrcode/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/qrcode/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/qrcode/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/qrcode/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/qrcode/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/qrcode/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/qrcode/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/city/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/city/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/city/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/city/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/country/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/country/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/country/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/country/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/pushnotification/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/pushnotification/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activitylog/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activitylog/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activitylog/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activitylog/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activitylog/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activitylog/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activitylog/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activitylog/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activitylog/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activitylog/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activitylog/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activitylog/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/create',
        role: 'Client',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/create',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/desktop/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/addbulk',
        role: 'Client',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/addbulk',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/list',
        role: 'Client',
        method: 'POST' 
      },
      {
        route: '/desktop/api/v1/user/list',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/desktop/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/:id',
        role: 'Client',
        method: 'GET' 
      },
      {
        route: '/desktop/api/v1/user/:id',
        role: 'Admin',
        method: 'GET' 
      },
      {
        route: '/desktop/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/user/count',
        role: 'Client',
        method: 'POST' 
      },
      {
        route: '/desktop/api/v1/user/count',
        role: 'Admin',
        method: 'POST' 
      },
      {
        route: '/desktop/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/update/:id',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/partial-update/:id',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/partial-update/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/updatebulk',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/updatebulk',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/softdelete/:id',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/softdelete/:id',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/softdeletemany',
        role: 'Client',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/softdeletemany',
        role: 'Admin',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/user/delete/:id',
        role: 'Client',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/user/delete/:id',
        role: 'Admin',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/user/deletemany',
        role: 'Client',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/deletemany',
        role: 'Admin',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/disponibilite/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/disponibilite/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/disponibilite/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/disponibilite/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/disponibilite/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/disponibilite/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/disponibilite/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/disponibilite/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/disponibilite/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/disponibilite/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/disponibilite/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/disponibilite/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/todo/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/todo/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/todo/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/todo/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/todo/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/todo/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/todo/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/todo/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/todo/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/todo/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/todo/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/todo/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_message/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_message/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_message/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_message/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/chat_message/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_message/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_message/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_message/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_message/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_message/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_message/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/chat_message/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_group/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_group/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_group/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_group/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/chat_group/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/chat_group/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_group/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_group/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_group/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_group/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/chat_group/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/chat_group/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/colis/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/colis/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/colis/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/colis/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/colis/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/colis/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/colis/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/colis/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/colis/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/colis/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/colis/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/colis/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/retrait/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/retrait/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/retrait/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/retrait/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/retrait/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/retrait/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/retrait/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/retrait/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/retrait/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/retrait/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/retrait/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/retrait/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/depot/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/depot/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/depot/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/depot/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/depot/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/depot/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/depot/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/depot/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/depot/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/depot/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/depot/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/depot/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/bilan/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/bilan/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/bilan/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/bilan/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/bilan/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/bilan/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/bilan/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/bilan/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/bilan/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/bilan/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/bilan/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/bilan/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caisse/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caisse/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caisse/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caisse/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/caisse/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caisse/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caisse/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caisse/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caisse/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caisse/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caisse/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/caisse/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caveaux/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caveaux/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caveaux/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caveaux/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/caveaux/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/caveaux/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caveaux/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caveaux/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caveaux/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caveaux/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/caveaux/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/caveaux/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/partenaire/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/partenaire/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/partenaire/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/partenaire/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/partenaire/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/partenaire/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/partenaire/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/partenaire/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/partenaire/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/partenaire/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/partenaire/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/partenaire/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/agence/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/agence/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/agence/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/agence/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/agence/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/agence/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/agence/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/agence/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/agence/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/agence/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/agence/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/agence/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/transfert/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/transfert/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/transfert/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/transfert/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/transfert/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/transfert/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/transfert/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/transfert/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/transfert/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/transfert/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/transfert/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/transfert/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/codemoney/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/codemoney/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/codemoney/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/codemoney/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/codemoney/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/codemoney/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/codemoney/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/codemoney/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/codemoney/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/codemoney/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/codemoney/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/codemoney/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/qrcode/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/qrcode/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/qrcode/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/qrcode/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/qrcode/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/qrcode/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/qrcode/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/qrcode/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/qrcode/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/qrcode/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/qrcode/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/qrcode/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/city/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/city/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/city/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/city/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/city/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/city/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/city/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/city/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/city/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/city/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/city/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/city/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/region/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/region/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/region/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/region/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/region/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/region/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/region/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/region/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/region/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/region/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/region/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/region/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/country/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/country/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/country/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/country/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/country/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/country/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/country/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/country/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/country/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/country/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/country/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/country/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/pushnotification/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/pushnotification/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/pushnotification/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/pushnotification/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/pushnotification/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/pushnotification/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/pushnotification/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/pushnotification/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/pushnotification/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/pushnotification/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/pushnotification/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/pushnotification/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/activitylog/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/activitylog/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/activitylog/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/activitylog/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/activitylog/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/activitylog/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/activitylog/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/activitylog/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/activitylog/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/activitylog/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/activitylog/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/activitylog/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/desktop/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/desktop/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/desktop/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/desktop/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },

    ];
    if (routeRoles && routeRoles.length) {
      const routes = [...new Set(routeRoles.map(routeRole => routeRole.route.toLowerCase()))];
      const routeMethods = [...new Set(routeRoles.map(routeRole => routeRole.method))];
      const roles = [ 'Client', 'Admin', 'System_User' ];
      const insertedProjectRoute = await projectRouteDb.findMany({
        uri: { '$in': routes },
        method: { '$in': routeMethods },
        'isActive': true,
        'isDeleted': false
      });
      const insertedRoles = await roleDb.findMany({
        code: { '$in': roles.map(role => role.toUpperCase()) },
        'isActive': true,
        'isDeleted': false
      });
      let projectRouteId = '';
      let roleId = '';
      let createRouteRoles = routeRoles.map(routeRole => {
        projectRouteId = insertedProjectRoute.find(pr => pr.uri === routeRole.route.toLowerCase() && pr.method === routeRole.method);
        roleId = insertedRoles.find(r => r.code === routeRole.role.toUpperCase());
        if (projectRouteId && roleId) {
          return {
            roleId: roleId.id,
            routeId: projectRouteId.id
          };
        }
      });
      createRouteRoles = createRouteRoles.filter(Boolean);
      const routeRolesToBeInserted = [];
      let routeRoleObj = {};

      await Promise.all(
        createRouteRoles.map(async routeRole => {
          routeRoleObj = await routeRoleDb.findOne({
            routeId: routeRole.routeId,
            roleId: routeRole.roleId,
          });
          if (!routeRoleObj) {
            routeRolesToBeInserted.push({
              routeId: routeRole.routeId,
              roleId: routeRole.roleId,
            });
          }
        })
      );
      if (routeRolesToBeInserted.length) {
        const result = await routeRoleDb.create(routeRolesToBeInserted);
        if (result) console.log('RouteRole seeded 🍺');
        else console.log('RouteRole seeder failed!');
      } else {
        console.log('RouteRole is upto date 🍺');
      }
    }
  } catch (error){
    console.log('RouteRole seeder failed due to ', error.message);
  }
}

async function seedUserRole () {
  try {
    const userRoles = [{
      'username':'Sigurd21',
      'password':'zj2woHBTfkUVQ0O'
    },{
      'username':'Alicia_Blanda16',
      'password':'YAyU1kpjEUb7uBl'
    },{
      'username':'Rosella.Bergstrom',
      'password':'5LotzRRMDgU6z9J'
    },{
      'username':'Jessica_Predovic',
      'password':'qFf55D4jYc1YbEC'
    },{
      'username':'Frieda.Jacobs',
      'password':'X27Z_ttO5mmwSFj'
    }];
    const defaultRoles = await roleDb.findMany();
    const insertedUsers = await userDb.findMany( { username: { '$in': userRoles.map(userRole => userRole.username) } });
    let user = {};
    const userRolesArr = [];
    userRoles.map(userRole => {
      user = insertedUsers.find(user => user.username === userRole.username && user.isPasswordMatch(userRole.password) && !user.isDeleted);
      if (user) {
        if (user.userType === authConstant.USER_TYPES.Admin){
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'ADMIN')._id
          });
        } else if (user.userType === authConstant.USER_TYPES.User){
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'USER')._id
          });
        } else {
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'SYSTEM_USER')._id
          });
        }  
      }
    });
    let userRoleObj = {};
    const userRolesToBeInserted = [];
    if (userRolesArr.length) {
      await Promise.all(
        userRolesArr.map(async userRole => {
          userRoleObj = await userRoleDb.findOne({
            userId: userRole.userId,
            roleId: userRole.roleId
          });
          if (!userRoleObj) {
            userRolesToBeInserted.push({
              userId: userRole.userId,
              roleId: userRole.roleId
            });
          }
        })
      );
      if (userRolesToBeInserted.length) {
        const result = await userRoleDb.create(userRolesToBeInserted);
        if (result) console.log('UserRole seeded 🍺');
        else console.log('UserRole seeder failed');
      } else {
        console.log('UserRole is upto date 🍺');
      }
    }
  } catch (error) {
    console.log('UserRole seeder failed due to ', error.message);
  }
}

const seedData = async (allRegisterRoutes) => {
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();
};
module.exports = seedData;
