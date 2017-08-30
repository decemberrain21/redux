import React from 'react';
import ReactDOM from 'react-dom';
const FileUpload = require('react-fileupload');


var Test = React.createClass({
  
  render: function() {
    /*set properties*/
    const options={
        baseUrl:'/',
        chooseFile : function(files){
          //document.getElementById("divfile").style.visibility = "hidden"; 
          document.getElementById("divfile").innerHTML = "Uploading...";
        console.log('you choose',typeof files == 'string' ? files : files[0].name)
    },
    }
    /*Use FileUpload with options*/
    /*Set two dom with ref*/
    return (
        <div id="divfile">
        <FileUpload options={options} >
            <button ref="chooseBtn" className="custombtn">SelectImage</button>
        </FileUpload>
        </div>
    )      
  }
});
const render = function() {
 
  /* Use ReactUploadFile with options */
  /* Custom your buttons */
 
  ReactDOM.render(
    <Test/>,
    document.getElementById('root')
  );
};
render();