import "./index.css";
import tree from "../data/tree";

var body = document.querySelector("body");
var data = [];
for (var count = 0; count < tree.length; count++) {
  data.push(tree[count]);
}

// console.log(data);
//展示页面，利用一个比较特殊的标签details、summary可以减少一些样式的设定
for (var i = 0; i < data.length; i++) {
  if (data[i].parentId == -1) {
    var details = document.createElement("details");
    body.appendChild(details);
    details.setAttribute("id", data[i].id);
    var summary = document.createElement("summary");
    summary.textContent = data[i].name;
    details.appendChild(summary);
    // data.splice(i, 1);
    details.addEventListener("toggle", showMsg(data[i].id, data));
  }
}

//toggle的处理
// function showMsg(id, data) {
//   var parent = document.getElementById(id);
//   var ul = document.createElement("ul");
//   parent.appendChild(ul);
//   for (var j = 0; j < data.length; j++) {
//     if (data[j].parentId == id) {
//       var li = document.createElement("li");
//       li.textContent = data[j].name;
//       ul.appendChild(li);
//     }
//   }
// }

function showMsg(id, data) {
  var parent = document.getElementById(id);
  var ul = document.createElement("ul");
  parent.appendChild(ul);
  //第一层循环
  for (var j = 0; j < data.length; j++) {
    //找到与匹配一级目录的子项
    if (data[j].parentId == id) {
      var li = document.createElement("li");
      //第二层循环，找到含有含有二级目录的子项，即匹配id与parentId
      for (var p = 0; p < data.length; p++) {
        //如果该项为二级目录
        if (data[j].id == data[p].parentId) {
          li.textContent = ""; //有一个置空的操作，否则在li中会有二级目录的innerText中
          var details = document.createElement("details");
          li.appendChild(details);
          ul.appendChild(li);
          details.setAttribute("id", data[j].id);
          var summary = document.createElement("summary");
          summary.textContent = data[j].name;
          details.appendChild(summary);
          details.addEventListener("toggle", showMsg(data[j].id, data));
          break; //跳出循环
        } else {
          li.textContent = data[j].name;
          ul.appendChild(li);
        }
      }
    }
  }
}
