// function MySentence(){
//     return <p>Jedna sasvim obicna recenica!</p>
// }
function MySentence(props) {
    // eslint-disable-next-line react/prop-types
    return <p>Ovo je recenica broj {props.number}.</p>;
  }
export default MySentence