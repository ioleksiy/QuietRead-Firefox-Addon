all:
	mkdir -p bin && rm -rf bin/* && cd src && zip ../bin/quietread.xpi -r *
