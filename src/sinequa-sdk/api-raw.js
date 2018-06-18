//universal body key value pairs
//TODO put in config
var endpoint = '/xrest';
var httpMethod = 'POST';
var commonBody = {user: 'api', password: 'api', profile: 'Default BCG', pretty: true, output: 'json'};

function universalApiWrapper(sinequaMethod, body) { //method-specific key value pairs (regardless of action)
  return fetch(endpoint, {
    method: httpMethod,
    body: JSON.stringify({
      ...commonBody,
      method: sinequaMethod,
      ...body
    })
  }).then(res => res.json());
}

export default {
  securityAuthToken: (body) => {
    return universalApiWrapper('security.authToken', body);
  },
  searchProfile: (body) => {
    return universalApiWrapper('search.profile', body);
  },
  searchAlerts: (body) => {
    return universalApiWrapper('search.alerts', body);
  },
  searchBaskets: (body) => {
    return universalApiWrapper('search.baskets', body);
  },
  searchLabels: (body) => {
    return universalApiWrapper('search.labels', body);
  },
  searchSavedQueries: (body) => {
    return universalApiWrapper('search.savedQueries', body);
  },
  searchSuggest: (body) => {
    return universalApiWrapper('search.suggest', body);
  },
  searchCustom: (body) => {
    return universalApiWrapper('search.custom', body);
  },
  engineSql: (body) => {
    return universalApiWrapper('engine.sql', body);
  },
  indexingCollection: (body) => {
    return universalApiWrapper('indexing.collection', body);
  },
  indexingCustomCollection: (body) => {
    return universalApiWrapper('indexing.customCollection', body);
  },
  indexingPartition: (body) => {
    return universalApiWrapper('indexing.partition', body);
  },
  operationActionStatus: (body) => {
    return universalApiWrapper('operation.actionStatus', body);
  },
  operationCollectionStart: (body) => {
    return universalApiWrapper('operation.collectionStart', body);
  },
  operationCommandStart: (body) => {
    return universalApiWrapper('operation.commandStart', body);
  },
  operationJobStart: (body) => {
    return universalApiWrapper('operation.jobStart', body);
  },
  operationPartitionStart: (body) => {
    return universalApiWrapper('operation.partitionStart', body);
  },
  operationServer: (body) => {
    return universalApiWrapper('operation.server', body);
  },
  adminConfig: (body) => {
    return universalApiWrapper('admin.config', body);
  },
  devPlugin: (body) => {
    return universalApiWrapper('dev.plugin', body);
  },
  multi: (body) => {
    return universalApiWrapper('multi', body);
  }
}