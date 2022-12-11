//SPDX-License-Identifier:MIT
pragma solidity ^0.8.6;


contract structure{
    //deployment gas - 388579;
    struct Book{
        string title;
        string author;
        uint bookID;
        uint price;
    }
    // define a struct- name of the struct variable to represent the struct
    Book book;
    function setBook() public{
        book= Book("Blokchain for beginners","Ineuron",4,1000);
        //function call - 127417 gas;
    }
    function getTitle() public view returns(string memory){
        return book.title;

        //if storage is used instead of memory then following error is obtained:-
        //TypeError: Data location must be "memory" or "calldata" for return parameter 
        // in function, but "storage" was given.

        //memory - 24599 gas

        //if calldata is used instead of memory then following error is obtained:-
        //TypeError: Return argument type string storage ref is not implicitly convertible 
        // to expected type (type of first return variable) string calldata.

    }
    function getAuthor() public view returns(string memory){
        return book.author;

        //if storage is used instead of memory then following error is obtained:-
        //TypeError: Data location must be "memory" or "calldata" for return parameter 
        // in function, but "storage" was given.

        //memory - 24555 gas

        //if calldata is used instead of memory then following error is obtained:-
        //TypeError: Return argument type string storage ref is not implicitly convertible 
        // to expected type (type of first return variable) string calldata.
    }
    function getBookId() public view returns(uint){
        return book.bookID;

        //We do not need to mention anything after uint for return parameter
        //By default calldata stores local variable like uint which costs
        //23485 gas


        //if we use storage after uint then following error is obtained:-
        //TypeError: Data location can only be specified for array, struct or mapping types,
        // but "storage" was given.

        //if we use memory after uint then following error is obtained:-
        //TypeError: Data location can only be specified for array, struct or mapping types,
        // but "memory" was given.

        //if we use calldata after uint then following error is obtained:-
        //TypeError: Data location can only be specified for array, struct or mapping types,
        // but "calldata" was given.


    }
    function getPrice() public view returns(uint){
        return book.price;

        //We do not need to mention anything after uint for return parameter
        //By default calldata stores local variable like uint which costs
        //23507 gas


        //if we use storage after uint then following error is obtained:-
        //TypeError: Data location can only be specified for array, struct or mapping types,
        // but "storage" was given.

        //if we use memory after uint then following error is obtained:-
        //TypeError: Data location can only be specified for array, struct or mapping types,
        // but "memory" was given.

        //if we use calldata after uint then following error is obtained:-
        //TypeError: Data location can only be specified for array, struct or mapping types,
        // but "calldata" was given.
    }
    
}
