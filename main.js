name_array = [];

function submit() {
  display_array = [];
  for (s = 1; s <= 4; s++) {
    var name = document.getElementById("name_" + s).value;
    console.log(name);
    name_array.push(name);
  }
  var len = name_array.length;
  console.log(len);
  for (key = 0; key < len; key++) {

    display_array.push("<h4> NAME-" + name_array[key] + "</h4>");
    console.log(display_array);

  }

  document.getElementById("display_name_with_commas").innerHTML = display_array;
  var remove_commas = display_array.join(" ");
  console.log(remove_commas);
  document.getElementById("display_name_without_commas").innerHTML = remove_commas;
  document.getElementById("submit_btn").style.display = "none";
  document.getElementById("sort_btn").style.display = "inline-block";

}


function sort() {
  name_array.sort();
  display_array_sort=[];

  var len = name_array.length;
  console.log(len);
  for (key = 0; key < len; key++) {

    display_array_sort.push("<h4> NAME-" + name_array[key] + "</h4>");
    console.log(display_array_sort);

  }

  document.getElementById("display_name_with_commas").innerHTML = display_array_sort;
  var remove_commas = display_array_sort.join(" ");
  console.log(remove_commas);
  document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
