<!DOCTYPE html>

<html lang="en" ng-app="creditApp">
    <head>
        <title>Linhas de Crédito para Clientes</title>
        <link href="css/bootstrap.css" rel="stylesheet"/>
        <link href="css/app.css" rel="stylesheet"/>
    </head>
    <body>
        <div ui-view></div>
        <script src="js/lib/angular.min.js" ></script>
        <script src="js/lib/angular-ui-router.min.js" ></script>
        <script src="js/lib/localforage.min.js" ></script>
        <script src="js/lib/ngStorage.min.js"></script>
        <script src="js/app/app.js"></script>
        <script src="js/app/CreditService.js"></script>
        <script src="js/app/CreditController.js"></script>
    </body>
</html>