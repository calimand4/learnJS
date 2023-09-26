function Even(K) {
    if (K % 2) {
        return true
    } else {
        return false
    }
}

[1, 2, 3, 5, 12, 23].forEach((numar) => {
    console.log(Even(numar))
})