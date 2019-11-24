import React from 'react';

export default (props) => {

    const search = () => {
        let input, filter, table, tr, username, name, i, usernameValue, nameValue;
        input = document.getElementById("input-search");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            username = tr[i].getElementsByTagName("td")[0];
            name = tr[i].getElementsByTagName("td")[1];
            if (username) {
                usernameValue = username.textContent || username.innerText;
                nameValue = name.textContent || name.innerText;
                if (usernameValue.toUpperCase().indexOf(filter) > -1 ||
                nameValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    return (
        <section className="topo">
            <h1>{props.title}</h1>
            <hr className="line"></hr>
            {props.input? <input id="input-search" onKeyUp={()=> search()} className="filter" placeholder="Filter table content" /> : null}
        </section>
    )
}