function outPut(){
    let a = []
    let b = []
    let c = []
    let n = prompt(`Nhap so phan tu cua mang a: `);
    let j = 0;
    for(let i=0;i<n;i++)
    {
        j = i+1;
        let arr = prompt(`Nhap a[${j}] =`)
        a.push(arr);
        c.push(arr);
    }
    let m = prompt(`Nhap so phan tu cua mang b: `);
    for(let i=0;i<m;i++)
    {
        j = i+1;
        let arr = prompt(`Nhap b[${j}] =`)
        b.push(arr);
        c.push(arr);
    }
    // c.sort();
    for(let i=1;i<c.length;i++)
    {
    for(let j=0;j<i;j++)
    {
        if(c[j]===c[i])
        {
            c.splice(j, 1);
        }
    }
    for(let i=1;i<c.length;i++)
    {
    for(let j=0;j<i;j++)
    {
        if(c[j]===c[i])
        {
            c.splice(j, 1);
        }
    }
    }
}
console.log(`Mang a:`);
console.log(a);
console.log(`Mang b:`);
console.log(b);
console.log(`Output:`);
console.log(c);
}
outPut()