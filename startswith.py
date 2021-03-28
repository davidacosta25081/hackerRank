text = "Jack and Jill went to the market to buy bread and cheese cheese is jack favorite food"
wordsToExclude = ["and", "he", "the", "to", "is"]

def retrieveMostFrequentlyUsedWords(text,wordsToExclude):
    output = []
    words_dict = {}
    separate = text.split(' ') 
    for word in separate:
        print(word)


retrieveMostFrequentlyUsedWords(text,wordsToExclude)