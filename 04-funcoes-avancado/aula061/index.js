function* geradora1() {
    // Código qualque ...
    yield 'valor 1';

    // Código qualque ...
    yield 'valor 2';

    // Código qualque ...
    yield 'valor 3';
}

const g1 = geradora1();

for (let valor of g1) {
    console.log(valor);
}



function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }    
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
