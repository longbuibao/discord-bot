module.exports = (data) => {
    if (!data)
        return [{ name: 'Something wrong', value: 'I can\'t find that word' }]
    const result = [{ name: 'Phonetic', value: data.phonetic || ":pleading_face: We have no phonetic for this word :pleading_face:" }]
    const { meanings } = data

    const defs = meanings.reduce((acc, curr) => {
        const { partOfSpeech, definitions } = curr
        const def = definitions.map(def => {
            return `\n\n**Defination: **${def.definition || ":pleading_face: We have no defination for this defination :pleading_face:"}, **Example: **${def.example || ":pleading_face: We have no example for this word :pleading_face:"}`
        }).toString().replace(',', '')

        acc.push({ name: partOfSpeech, value: def })
        return acc
    }, [])
    return [...result, ...defs]
}