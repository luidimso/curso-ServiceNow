//Ordenar por descrição (orderByDesc)
var incident = new GlideRecord('incident');
incident.orderBy('short_description');
incident.query();
while(incident.next()){
  gs.print(incident.number + ': ' + incident.short_description);
}

//Limitar quantidade de problemas retornados
var problem = new GlideRecord('problem');
problem.setLimit(5);
problem.query();
while(problem.next()){
  gs.print(problem.number);
}

//Verificar permissões na tabela
var problem = new GlideRecord('problem');
problem.query();
if(problem.canCreate() && problem.canRead() && problem.canWrite() && problem.canDelete()){
  gs.print("I'm a god");
}

//Contagem do número de incidentes
var incident = new GlideRecord('incident');
incident.query();
gs.print(incident.getRowCount());

//Verificar se existe próximo incidente
var incident = new GlideRecord('incident');
incident.query();
gs.print(incident.hasNext());

//Pegar link para acesso a um incidente
var incident = new GlideRecord('incident');
incident.query();
incident.next();
gs.print(incident.getLink());

//Apagar multiplos incidentes
var incident = new GlideRecord('incident');
incident.addEncodedQuery('short_descriptionLIKETest #');
incident.deleteMultiple();

//Atualizar informação de um incidente
var incident = new GlideRecord('incident');
incident.query();
incident.next();
incident.urgency = 2;
incident.update();

//Atualizar informação de mais de um incidente
var incident = new GlideRecord('incident');
incident.addQuery('priority', 3);
incident.query();
while(incident.next()){
  incident.priority = 2;
  incident.update();
}
