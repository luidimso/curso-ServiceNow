//Scripts - Background
//Selecionar incidentes com prioridade 1 (crítica)
var incident = new GlideRecord('incident');
incident.addQuery('priority', 1);
incident.query();
while(incident.next()){
  gs.print('Incident number: ' + incident.number + ' - ' + incident.priority.getDisplayValue());
}

//Selecionar um incidente pelo sys_id
incident.get('57af7aec73d423002728660c4cf6a71c');
gs.print('Incident number: ' + incident.number + ' - Incident sys_id: ' + incident.sys_id);

//Selecionar incidentes por Encoded query
var query = 'category=inquiry^active=true^opened_by=6816f79cc0a8016401c5a33be04be441';
incident.addEncodedQuery(query);
incident.query();
while(incident.next()){
  gs.print(incident.number);
}

//Inserir 5 incidentes
var newIncidents = [];
for(var i=1; i<=5; i++){
  incident.newRecord();
  incident.short_description = 'Test #' + i;
  newIncidents.push(incident.insert());
}
gs.print(newIncidents);

//Deletar um incidentes
incident.addQuery('short_description', 'Test #3');
incident.query();
while(incident.next()){
  incident.deleteRecord();
}
