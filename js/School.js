function addNewInfo() {
    var name = document.getElementById('fullname').value;
    var courses = document.getElementById('courses').value;
    var IA = document.getElementById('IA').value;
    var EA = document.getElementById('EA').value;
    var total = parseInt(IA) + parseInt(EA);

    if (EA > 50) {
        alert("Invalid data: End of Semester marks cannot be more than 50")
        return;
    }
    if (IA > 50) {
        alert("Invalid data: Internal Assessment marks cannot be more than 50")
        return;
    }

    function grade() {

        if (total < 101 && total > 79) {
            return ("A")
        }
        else if (total < 80 && total > 69) {
            return ("B")
        }
        else if (total < 70 && total > 59) {
            return ("C")
        }
        else if (total < 60 && total > 49) {
            return ("D")
        }
        else if (total < 50 && total > 39) {
            return ("E")
        }
        else if (total < 40 && total > 0) {
            return ("F")
        }
        else {
            return ('')
        }
    }



    var row = document.createElement("TR");
    document.getElementById("studentsheet").appendChild(row);

    var cell1 = row.insertCell(0);
    var cell1info = document.createTextNode(name);
    cell1.appendChild(cell1info);

    var cell2 = row.insertCell(-1);
    var cell2info = document.createTextNode(courses);
    cell2.appendChild(cell2info);

    var cell3 = row.insertCell(-1);
    var cell3info = document.createTextNode(IA);
    cell3.appendChild(cell3info);

    var cell4 = row.insertCell(-1);
    var cell4info = document.createTextNode(EA);
    cell4.appendChild(cell4info);

    var cell5 = row.insertCell(-1);
    var cell5info = document.createTextNode(total);
    cell5.appendChild(cell5info);

    var cell6 = row.insertCell(-1);
    var cell6info = document.createTextNode(grade());
    cell6.appendChild(cell6info);


    document.getElementById('fullname').value = ''
    document.getElementById('courses').value = ''
    document.getElementById('IA').value = ''
    document.getElementById('EA').value = ''
}
