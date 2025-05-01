const hello = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const area = document.getElementById("area")
        const buttons = document.querySelectorAll(".buttons")
        const form = document.getElementById('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault()
        })

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const value0 = button.textContent;
                // console.log(value)
                if (value0 === "Clear") {
                    area.innerHTML = null
                }
                else if (value0 === "=") {
                    try {
                        var exp = area.value
                        var ans = eval(exp)
                        area.innerHTML = ans;
                        if (localStorage.length > 9) {
                            let input = confirm("The history is full,do you want to clear history  , If you want to add new history click yes");
                            if (input == true) {
                                localStorage.clear()
                                location.reload()
                            } else {
                                alert("limit reached")
                            }

                        } else {
                            localStorage.setItem(exp, ans)
                            console.log(localStorage)
                        }


                    } catch (error) {
                        area.innerHTML = "Error";
                    }
                }
                else {
                    area.innerHTML += value0
                }



            })

        });


    })
}
hello()

