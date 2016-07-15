var $ = window.jQuery;
var $msg = $('#messages')

function waitTwoSeconds(params) {
  return new Promise(function (done, reject) {
    setTimeout(function() {
    done('capuchino')
    },2000)
 //  setTimeout(function () {
  //     reject('No Tenemos Expresso')
   //})
    
})
}
$msg.text('Quiero un expresso')
waitTwoSeconds()
.then(function(cafe) {
    $msg.text('Aqui tiene su: ' + cafe).css('color','green')
   return waitTwoSeconds()
.then(function() {
        throw('Esta muy caliente')
        $msg.text('tomar un Cafe')
    })
})
.catch(function(error) {
    $msg.text('Error!: '+ error+'!!!').css('color','red')
})