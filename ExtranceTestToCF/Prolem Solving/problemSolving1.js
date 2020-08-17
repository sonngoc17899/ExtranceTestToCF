function f()
{
    let a = []
    let n = parseInt(prompt(`Nhap so phan tu cua mang: `));
    let j = 0;
    for(let i=0;i<n;i++)
    {
        j = i+1;
        let arr = parseInt(prompt(`Nhap a[${j}] =`))
        a.push(arr);
    }
    let b = []
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2==0) b.push(a[i]) 
    }
    console.log(b);
}
f()