
const miejscowosc = "Wrocław";

let = tablica = ["Kasia",36,miejscowosc,{"id":1}];

const imionaTablica = ["Ala","Kasia","Tomek"];

const wiekTablica =[8,14,15,56];



console.log(tablica[3]);
console.log(imionaTablica.length);
console.log(wiekTablica.length);

imionaTablica.push("Rafał","Wojtek"); // dodawanie na końcu
imionaTablica.unshift("Marcin"); // dodawanie na początku
imionaTablica.shift(); //usuwanie - 1- go elementu.
imionaTablica[5] = "Paweł";

wiekTablica.shift();

console.log(imionaTablica);
console.log(wiekTablica);

const zlaczonaTablica = imionaTablica.join(" oraz " );
console.log(zlaczonaTablica);


console.log(imionaTablica);
console.log(imionaTablica.reverse());

console.log(imionaTablica.indexOf("Paweł"));
console.log(wiekTablica.indexOf(56));

console.log(imionaTablica.includes("Karol"));

if (imionaTablica.includes("Ala")){
    console.log("Hej takie imię jest w talicy");

} else {
    console.log("Niestety, ale takie imię nie istnieje");
}

console.log(wiekTablica.sort((a,b)=> a-b));

const polaczenie = imionaTablica.concat(wiekTablica);

console.log(polaczenie);









