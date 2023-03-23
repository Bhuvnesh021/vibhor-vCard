
$(document).ready ( function(){
    aa();
   });
   
   function aa()
   {
   
   var cc=window.location.href;
   var aa=cc.substring( cc.lastIndexOf("/")+1);
   var filename = aa.split('.')[0];
   
   var aa=document.getElementById("msform");
   var bb= document.getElementsByTagName("h2")[0];
   
   bb.innerHTML=filename;
   }
   
   
   
   
   function Valueassign(i) { try { var value1 = document.getElementsByName(i)[0].value; i = ''; return value1;   }  catch (ex) {i = ''; return ''; }}
    function DopostQuery() { var res=''; 
    if(document.getElementsByName('name')[0].value=='')
    {   document.getElementById('errmsg').innerHTML='Full Name is Required '; $('#alert').show(1500);  return false; }
    if(document.getElementsByName('emailaddress')[0].value=='')
    {   document.getElementById('errmsg').innerHTML='E Mail is Required '; $('#alert').show(1500);  return false; }
    if(document.getElementsByName('mobile')[0].value=='')
    {   document.getElementById('errmsg').innerHTML='Mobile Number is Required '; $('#alert').show(1500);  return false; }
    if(document.getElementsByName('city')[0].value=='')
    {   document.getElementById('errmsg').innerHTML='Current Organization is Required '; $('#alert').show(1500);  return false; }$.ajax({ type: 'POST',url: '/Call_WebService.asmx/SendEnquiry',data: '{Name:"'+ Valueassign("name")+'",Designation:"'+ Valueassign("designation")+'",Organization:"'+Valueassign("organization")+ '",OfficeAddress:"'+Valueassign("officeaddress")+'",City:"'+Valueassign("city")+'",EmailAddress:"'+Valueassign("emailaddress")+'",TelephoneOffice:"'+Valueassign("telephoneoffice")+'",Mobile:"'+Valueassign("mobile")+'",SubjectOfQuery:"'+Valueassign("subjectofquery")+'",OtherUpdate:"'+ Valueassign("otherupdate")+'",Query:"'+Valueassign("query")+'",flag1:"'+ Valueassign("flag1")+'",flag2:"'+Valueassign("flag2")+'",flag3:"'+Valueassign("flag3")+'",flag4:"'+Valueassign("flag4")+'",flag5:"'+Valueassign("flag5")+'",filename :"'+res+'"}',   contentType: 'application/json; charset=utf-8',dataType: 'json',success: function (response) {if (response) {document.getElementById('errmsg').innerHTML = 'Query submitted succesfully'; $('#alert').show(1500);var fields = $('input:not(:button)'); length = fields.length;while (length--) { fields[length].value = ''; } var fields1 = document.getElementsByTagName('textarea'); var lan1=fields1.length; while (lan1--) { fields1[lan1].value = ''; } }}, error: function (xmlHttpRequest, status, err) {alert('Sorry! Error happens.' + err);}});}
   
   
   
   
   