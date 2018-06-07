import apiRaw from './api-raw';

export default {
  basicQuery: (text) => {
    return apiRaw.searchProfile({
      "responsetype": 'SearchResult',
      "query": {
        "text": text
      }
    });
  },
  listAlerts: () => {
    return apiRaw.searchAlerts({
      "action": "list"
    });
  },
  createAlerts: (alertParameters) => {
    return apiRaw.searchAlerts({
      "action": "create",
      "alert": alertParameters
    });
  },
  readAlerts: (name) => {
    return apiRaw.searchAlerts({
      "action": "read",
      "name": name
    });
  },
  updateAlerts: (alertParameters) => {
    return apiRaw.searchAlerts({
      "action": "update",
      "alert": alertParameters
    });
  },
  deleteAlerts: (name) => {
    return apiRaw.searchAlerts({
      "action": "delete",
      "name": name
    });
  },

  listBaskets: () => {
    return apiRaw.searchBaskets({
      "action": "list"
    });
  },
  getBaskets: () => {
    return apiRaw.searchBaskets({
      "action": "get"
    });
  },
  createBaskets: () => {
    return apiRaw.searchBaskets({
      "action": "create"
    });
  },
  deleteBaskets: () => {
    return apiRaw.searchBaskets({
      "action": "delete"
    });
  },
  updateBaskets: () => {
    return apiRaw.searchBaskets({
      "action": "update"
    });
  },
  addDocsBaskets: () => {
    return apiRaw.searchBaskets({
      "action": "adddocs"
    });
  },
  deleteDocsBaskets: () => {
    return apiRaw.searchBaskets({
      "action": "deletedocs"
    });
  },

  listLabels: () => {
    return apiRaw.searchLabels({
      "action": "list"
    });
  },
  addLabels: () => {
    return apiRaw.searchLabels({
      "action": "add"
    });
  },
  removeLabels: () => {
    return apiRaw.searchLabels({
      "action": "remove"
    });
  },
  renameLabels: () => {
    return apiRaw.searchLabels({
      "action": "rename"
    });
  },
  deleteLabels: () => {
    return apiRaw.searchLabels({
      "action": "delete"
    });
  },
  bulkAddLabels: () => {
    return apiRaw.searchLabels({
      "action": "bulkAdd"
    });
  },
  bulkRemoveLabels: () => {
    return apiRaw.searchLabels({
      "action": "bulkRemove"
    });
  },

  listSavedQueries: () => {
    return apiRaw.searchSavedQueries({
      "action": "list"
    });
  },
  getSavedQueries: () => {
    return apiRaw.searchSavedQueries({
      "action": "get"
    });
  },
  setSavedQueries: () => {
    return apiRaw.searchSavedQueries({
      "action": "set"
    });
  },
  deleteSavedQueries: () => {
    return apiRaw.searchSavedQueries({
      "action": "delete"
    });
  },

  suggest: (text) => {
    return apiRaw.searchSuggest({
      "suggestionQuery": "test", //https://doc.sinequa.com/en.sinequa-es.v10/content/en.sinequa-es.admin-ui-suggestQueries.html
      "text": text
    });
  },

  custom: () => {
    return apiRaw.searchCustom({

    });
  }
}