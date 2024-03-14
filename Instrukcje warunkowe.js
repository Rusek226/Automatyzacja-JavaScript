const osoba1 = "Bartosz";
const osoba2 = "Wojte";

if (osoba1 === "Tomek"){
    alert("Udało się zlokalizować osobę");
} else if (osoba1 === "Bartosz"){
    alert("Udało się zlokalizować osobę,ale nie ma odpowiednich uprawnień");
}else {
    alert("Nie udało się zlokalizować osoby");
}
const login = "admin";
const password = "password";

if (login === "admin" || password === "password"){
    alert("Użytkowik został zalogowany do systemu")
} else
    alert("Dane logowanie są nieprawidłowe!");