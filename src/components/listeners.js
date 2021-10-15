/*global FB*/
function addListeners(){
    document.getElementById('share-button').addEventListener('click', function () {
        FB.ui({
            method: 'share',
            href: 'https://www.hcltech.com/'
        }, function (response) {
            console.log(response);
        });
    });

    document.getElementById('login-button').addEventListener('click', function () {
        FB.login(function(response) {
            if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
             FB.api('/me', function(response) {
               console.log('Good to see you, ' + response.name + '.');
               document.getElementById('logout-button').style.display = '';
               document.getElementById('login-button').style.display = 'none';
               document.getElementById('share-button').style.display = '';
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });
    });

    document.getElementById('logout-button').addEventListener('click', function () {
        FB.logout(function(response) {
            console.log('Logged Out')
            document.getElementById('logout-button').style.display = 'none';
            document.getElementById('login-button').style.display = '';
            document.getElementById('share-button').style.display = 'none';
          });
    });
}

export default addListeners;