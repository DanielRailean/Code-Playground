export file=$(echo $1.rs | cut -d "." -f 1)
mkdir ./bin
cp $1 bin/$1
cd ./bin
rustc $1 && ./$file
rm $1
rm $file
cd ..
