for file in lib/*.js; 
do 
  mv -- "$file" "${file%%.js}"; 
done