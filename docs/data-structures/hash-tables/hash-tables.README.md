Hash table
===
From [Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Hash_table)

>In [computing](), a hash table (hash map) is a [data structure]() that implements an 
>[associative array abstract data type](), a structure that can map [keys]() to [values](). 
>A hash table uses a hash function to compute an index, also called a hash code, 
>into an array of buckets or slots, from which the desired value can be found. 
>During lookup, the key is hashed and the resulting hash indicates where the 
>corresponding value is stored.
 
>Ideally, the hash function will assign each key to a unique bucket, but most 
>hash table designs employ an imperfect hash function, which might cause hash 
>[collisions](https://en.wikipedia.org/wiki/Collision_(computer_science)) 
>where the hash function generates the same index for more than one 
>key. Such collisions are typically accommodated in some way.
 
>In a well-dimensioned hash table, the average cost (number of 
>[instructions](https://en.wikipedia.org/wiki/Instruction_(computer_science))) 
>for each lookup is independent of the number of elements stored in the table. 
>Many hash table designs also allow arbitrary insertions and deletions of 
>key-value pairs, at ([amortized](https://en.wikipedia.org/wiki/Amortized_analysis)[2]) constant average cost per operation.[3][4]
 
>In many situations, hash tables turn out to be on average more efficient 
>than [search](https://en.wikipedia.org/wiki/Search_tree) trees or any other 
>[table](https://en.wikipedia.org/wiki/Table_(computing)) lookup structure. 
>For this reason, they are widely used in many kinds of computer [software](), 
>particularly for [associative arrays](https://en.wikipedia.org/wiki/Associative_array),
> [database indexing](https://en.wikipedia.org/wiki/Database_index), 
>[caches](https://en.wikipedia.org/wiki/Cache_(computing)), and 
>[sets](https://en.wikipedia.org/wiki/Set_(abstract_data_type)).
