class Node {
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(){
		this.head = null;
		this.size = 0;
	}

	//Insérer le premier noeud
	insertFirst(data){
		this.head = new Node(data, this.head);
		this.size++;
		return;

		}

	//Insérer le dernier noeud

	insertLast(data) {
		let node = new Node(data);
		let current;

		if(!this.head) {
			this.head = node;
		} else{
			current = this.head;

			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
		return;
	}




		//Insérer un noeud dans la liste pour un indice
	insertAt(data, index) {
		if (index > 0 && index > this.size) {
			return;
		}

		if (index === 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const node = new Node(data);
		let current, previous;

		current=this.head;
		let count = 0;

		while (count < index) {
			previous = current;
			count++;
			current = current.next;
		}

		node.next = current;
		previous.next = node;

		return;

	}






		//Récuperer un noeud sur un indice défini
	getAt(index) {
		let current = this.head;
		let count = 0;

		while(current){
			if (count == index) {
				return current.data;
			}
			count++;
			current = current.next;
		}

		return;
	}

	//Imprimer la liste liée






		//Supprimer un noeud sur un indice défini
	removeAt(index) {
		if(index > 0 && index > this.size) {
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;

		//remove first
		if (index === 0) {
			this.head = current.next;
			return;
		} else {
			while(count < index) {
				count++;
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}

		this.size--;
		return;
	}





	//Imprimer la liste liée
	printListData() {
		let current = this.head;
		var tab=[];

		while(current){
			tab.push(current.data);
			current=current.next;
			
		}
	
		return tab;
	}

	//Effacer une liste liée

	clearList() {
		this.head = null;
		this.size = 0;
		return;
	}
}
// const ll = new LinkedList();

// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertLast(400);

// ll.clearList();

// ll.removeAt(0);

// ll.printListData();
// ll.getAt(0);





var ll = new LinkedList();

function ajoutDebut(){
	
	ll.insertFirst(document.getElementById('data').value);

}

function ajoutFin(){

	ll.insertLast(document.getElementById('data').value);
}

function ajoutIn(){
	ll.insertAt(document.getElementById('data').value , document.getElementById('index').value);

}



function removeList(){
	ll.clearList();
}

function removeAt(){
	ll.removeAt(document.getElementById('index').value);
}

function printList(){
	
	document.getElementById("res").innerHTML=ll.printListData();

}

function getIn(){

	document.getElementById("res2").innerHTML=ll.getAt(document.getElementById('index').value);	

}