for file in lib/*.js; 
do 
  sudo mv -- "$file" "${file%%.lib}"; 
done