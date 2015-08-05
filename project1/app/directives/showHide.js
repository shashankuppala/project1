/**
 * Created by shashank on 7/17/2015.
 */
app.directive('showHide',[function(){
return{
    restrict:"A",
    link:function(scope,element,attrs){
        element.bind('click',function(){
        $('#data').toggle();

        })
    }
}


}])
