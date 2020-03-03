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
  gs.print("I'm god");
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
