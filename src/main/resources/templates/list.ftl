<div class="generic-container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Créditos a Clientes </span></div>
		<div class="panel-body">
	        <div class="formcontainer">
	            <div class="alert alert-success" role="alert" ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>
	            <div class="alert alert-danger" role="alert" ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
	            <form ng-submit="ctrl.submit()" name="myForm" class="form-horizontal">
	                <input type="hidden" ng-model="ctrl.credit.codigo" />
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="nomeCliente">Nome do Cliente</label>
	                        <div class="col-md-8">
	                            <input type="text" ng-model="ctrl.credit.nomeCliente" id="nomeCliente" class="username form-control input-sm" placeholder="Informe o nome do cliente" required ng-minlength="3"/>
	                        </div>
	                    </div>
	                </div>
 
	                <div class="row">
	                	<div class="form-group col-md-7">	                     
	                        <label class="col-md-4 control-lable" for="limiteCredito">Limite de Crédito</label>
	                        <div class="col-md-7"> 
	                            <input type="text" ng-model="ctrl.credit.limiteCredito" id="limiteCredito" class="form-control input-sm" placeholder="Informe o limite de crédito" required ng-pattern="ctrl.onlyNumbers"/>
	                    	</div>     
	                    </div>
	                
	                    <div class="form-group col-md-5">	                    	 
	                        <label class="col-md-4 control-lable" for="risco">Tipo de Risco</label>
	                        <div class="col-md-5"> 
	                         	<select id="risco" ng-model="ctrl.credit.tipoRisco" ng-change="getTaxaJuros()" class="form-control input-sm" required>
          						  
            						<option ng-repeat="risco in riscos" value="{{risco.Id}}">
                							{{risco.Name}}
            						</option>
       							</select>	                            
	                        </div>
	                    </div>
	                </div>

           			<div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="taxaJuros">Taxa de Juros</label>
	                        <div class="col-md-7">	                        
	                        	{{taxaJuros}} %
	                            <input type="hidden"  value="taxaJuros" name="taxaJuros" ng-model="ctrl.credit.tipoRisco" id="taxaJuros" class="username form-control input-sm" />
	                        </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="form-actions floatRight">
	                        <input type="submit"  value="{{!ctrl.credit.codigo ? 'Add' : 'Update'}}" class="btn btn-primary btn-sm" ng-disabled="myForm.$invalid || myForm.$pristine">
	                        <button type="button" ng-click="ctrl.reset()" class="btn btn-warning btn-sm" ng-disabled="myForm.$pristine">Reset Form</button>
	                    </div>
	                </div>
	                
	            </form>
    	    </div>
		</div>	
    </div>
</div>    
<div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading"><span class="lead">Lista de linhas de créditos a clientes </span></div>
	<div class="panel-body">
		<div class="table-responsive">
	        <table class="table table-hover">
	            <thead>
	            <tr>		                 
	                <th>Nome do cliente</th>
	                <th>Limite de crédito</th>
	                <th>Risco</th>
	                <th>Taxa de Juros</th>	                
	                <th width="100"></th>
	                <th width="100"></th>
	            </tr>
	            </thead>
	            <tbody>
	            <tr ng-repeat="c in ctrl.getAllCredits()">
	                <td>{{c.nomeCliente}}</td>
	                <td>{{c.limiteCredito}}</td>
	                <td>{{c.tipoRisco}}</td>
	                <td>{{c.taxaJuros}}</td>
	                <td><button type="button" ng-click="ctrl.editCredit(c.codigo)" class="btn btn-success custom-width">Edit</button></td>
	                <td><button type="button" ng-click="ctrl.removeCredit(c.codigo)" class="btn btn-danger custom-width">Remove</button></td>
	            </tr>
	            </tbody>
	        </table>		
		</div>
	</div>        
</div>