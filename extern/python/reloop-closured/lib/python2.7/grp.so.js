(function(c){function e(a){var b,c,d,e,f,g;d=0;e=_PyStructSequence_New(q);b=e==0?1:2;a:do if(b==1)c=0;else if(b==2)if(f=_PyList_New(0),b=f==0?3:6,b==3){HEAP[e]-=1;b=HEAP[e]==0?4:5;if(b==4)FUNCTION_TABLE[HEAP[HEAP[e+4]+24]](e);c=0}else if(b==6){c=HEAP[a+12];b:for(;;){if(HEAP[c]==0){b=21;break b}g=_PyString_FromString(HEAP[c]);if(g==0){b=12;break b}b=_PyList_Append(f,g);var h=g;if(b!=0){b=9;break b}HEAP[g]=HEAP[h]-1;b=HEAP[g]==0?18:19;if(b==18)FUNCTION_TABLE[HEAP[HEAP[g+
4]+24]](g);c+=4;b=20}b:do if(b==21){b=e;c=d;var j=_PyString_FromString(HEAP[a]);HEAP[b+12+c*4]=j;d+=1;c=e;j=d;b=HEAP[a+4]!=0?22:23;b==22?(b=_PyString_FromString(HEAP[a+4]),HEAP[c+12+j*4]=b,d+=1):b==23&&(HEAP[c+12+j*4]=__Py_NoneStruct,d+=1,HEAP[__Py_NoneStruct]+=1);b=e;c=d;j=_PyInt_FromLong(HEAP[a+8]);HEAP[b+12+c*4]=j;d+=1;HEAP[e+12+d*4]=f;d+=1;b=_PyErr_Occurred();c=e;b=b!=0?25:28;if(b==25){HEAP[e]=HEAP[c]-1;b=HEAP[e]==0?26:27;if(b==26)FUNCTION_TABLE[HEAP[HEAP[e+4]+24]](e);c=0;break a}else if(b==28)break a}else if(b==
9){if(h==0)break b;HEAP[g]-=1;if(HEAP[g]!=0)break b;FUNCTION_TABLE[HEAP[HEAP[g+4]+24]](g)}while(0);HEAP[f]-=1;b=HEAP[f]==0?13:14;if(b==13)FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);HEAP[e]-=1;b=HEAP[e]==0?15:16;if(b==15)FUNCTION_TABLE[HEAP[HEAP[e+4]+24]](e);c=0}while(0);return c}function a(){d=allocate([103,114,95,110,97,109,101,0],"i8",ALLOC_NORMAL);f=allocate([103,114,111,117,112,32,110,97,109,101,0],"i8",ALLOC_NORMAL);g=allocate([103,114,95,112,97,115,115,119,100,0],"i8",ALLOC_NORMAL);h=allocate([112,
97,115,115,119,111,114,100,0],"i8",ALLOC_NORMAL);j=allocate([103,114,95,103,105,100,0],"i8",ALLOC_NORMAL);k=allocate([103,114,111,117,112,32,105,100,0],"i8",ALLOC_NORMAL);l=allocate([103,114,95,109,101,109,0],"i8",ALLOC_NORMAL);m=allocate([103,114,111,117,112,32,109,101,109,101,98,101,114,115,0],"i8",ALLOC_NORMAL);n=allocate(40,["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"],ALLOC_NORMAL);o=allocate([103,114,112,46,
115,116,114,117,99,116,95,103,114,111,117,112,58,32,82,101,115,117,108,116,115,32,102,114,111,109,32,103,101,116,103,114,42,40,41,32,114,111,117,116,105,110,101,115,46,10,10,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,97,99,99,101,115,115,101,100,32,101,105,116,104,101,114,32,97,115,32,97,32,116,117,112,108,101,32,111,102,10,32,32,40,103,114,95,110,97,109,101,44,103,114,95,112,97,115,115,119,100,44,103,114,95,103,105,100,44,103,114,95,109,101,109,41,10,111,114,32,118,105,97,
32,116,104,101,32,111,98,106,101,99,116,32,97,116,116,114,105,98,117,116,101,115,32,97,115,32,110,97,109,101,100,32,105,110,32,116,104,101,32,97,98,111,118,101,32,116,117,112,108,101,46,10,0],"i8",ALLOC_NORMAL);p=allocate([0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0],["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0],ALLOC_NORMAL);r=allocate([103,114,112,46,115,116,114,117,99,116,95,103,114,111,117,112,0],"i8",ALLOC_NORMAL);q=allocate(196,["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",
0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",
0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0],ALLOC_NORMAL);s=allocate([103,101,116,103,114,103,105,100,40,41,58,32,103,105,100,32,110,111,116,32,102,111,117,110,100,58,32,37,100,0],"i8",ALLOC_NORMAL);u=allocate([103,101,116,103,114,110,97,109,40,41,58,32,110,97,109,101,32,110,111,116,32,102,111,117,110,100,58,
32,37,115,0],"i8",ALLOC_NORMAL);v=allocate([103,101,116,103,114,103,105,100,0],"i8",ALLOC_NORMAL);y=allocate([103,101,116,103,114,103,105,100,40,105,100,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,110,117,109,101,114,105,99,32,103,114,111,117,112,32,73,68,46,32,32,73,102,10,105,100,32,105,115,32,110,111,116,32,118,97,108,105,100,44,32,
114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0],"i8",ALLOC_NORMAL);w=allocate([103,101,116,103,114,110,97,109,0],"i8",ALLOC_NORMAL);x=allocate([103,101,116,103,114,110,97,109,40,110,97,109,101,41,32,45,62,32,116,117,112,108,101,10,82,101,116,117,114,110,32,116,104,101,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,32,101,110,116,114,121,32,102,111,114,32,116,104,101,32,103,105,118,101,110,32,103,114,111,117,112,32,110,97,109,101,46,32,32,73,102,10,110,97,109,101,32,105,115,32,110,
111,116,32,118,97,108,105,100,44,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,46,0],"i8",ALLOC_NORMAL);B=allocate([103,101,116,103,114,97,108,108,0],"i8",ALLOC_NORMAL);z=allocate([103,101,116,103,114,97,108,108,40,41,32,45,62,32,108,105,115,116,32,111,102,32,116,117,112,108,101,115,10,82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,97,118,97,105,108,97,98,108,101,32,103,114,111,117,112,32,101,110,116,114,105,101,115,44,32,105,110,32,97,114,98,105,116,114,97,114,
121,32,111,114,100,101,114,46,10,65,110,32,101,110,116,114,121,32,119,104,111,115,101,32,110,97,109,101,32,115,116,97,114,116,115,32,119,105,116,104,32,39,43,39,32,111,114,32,39,45,39,32,114,101,112,114,101,115,101,110,116,115,32,97,110,32,105,110,115,116,114,117,99,116,105,111,110,10,116,111,32,117,115,101,32,89,80,47,78,73,83,32,97,110,100,32,109,97,121,32,110,111,116,32,98,101,32,97,99,99,101,115,115,105,98,108,101,32,118,105,97,32,103,101,116,103,114,110,97,109,32,111,114,32,103,101,116,103,114,
103,105,100,46,0],"i8",ALLOC_NORMAL);F=allocate([0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);I=allocate([65,99,99,101,115,115,32,116,111,32,116,104,101,32,85,110,105,120,32,103,114,111,117,112,32,100,97,116,97,98,97,115,101,46,10,10,71,114,111,117,112,32,101,110,116,114,105,101,115,32,97,114,101,32,114,101,112,111,114,116,101,100,32,97,115,32,52,45,116,117,112,108,101,115,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,102,105,101,108,100,115,10,102,114,111,109,32,116,104,101,32,
103,114,111,117,112,32,100,97,116,97,98,97,115,101,44,32,105,110,32,111,114,100,101,114,58,10,10,32,32,110,97,109,101,32,32,32,45,32,110,97,109,101,32,111,102,32,116,104,101,32,103,114,111,117,112,10,32,32,112,97,115,115,119,100,32,45,32,103,114,111,117,112,32,112,97,115,115,119,111,114,100,32,40,101,110,99,114,121,112,116,101,100,41,59,32,111,102,116,101,110,32,101,109,112,116,121,10,32,32,103,105,100,32,32,32,32,45,32,110,117,109,101,114,105,99,32,73,68,32,111,102,32,116,104,101,32,103,114,111,
117,112,10,32,32,109,101,109,32,32,32,32,45,32,108,105,115,116,32,111,102,32,109,101,109,98,101,114,115,10,10,84,104,101,32,103,105,100,32,105,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,97,109,101,32,97,110,100,32,112,97,115,115,119,111,114,100,32,97,114,101,32,115,116,114,105,110,103,115,46,32,32,40,78,111,116,101,32,116,104,97,116,32,109,111,115,116,10,117,115,101,114,115,32,97,114,101,32,110,111,116,32,101,120,112,108,105,99,105,116,108,121,32,108,105,115,116,101,100,32,97,115,32,109,
101,109,98,101,114,115,32,111,102,32,116,104,101,32,103,114,111,117,112,115,32,116,104,101,121,32,97,114,101,32,105,110,10,97,99,99,111,114,100,105,110,103,32,116,111,32,116,104,101,32,112,97,115,115,119,111,114,100,32,100,97,116,97,98,97,115,101,46,32,32,67,104,101,99,107,32,98,111,116,104,32,100,97,116,97,98,97,115,101,115,32,116,111,32,103,101,116,10,99,111,109,112,108,101,116,101,32,109,101,109,98,101,114,115,104,105,112,32,105,110,102,111,114,109,97,116,105,111,110,46,41,0],"i8",ALLOC_NORMAL);
N=allocate([103,114,112,0],"i8",ALLOC_NORMAL);G=allocate(1,"i1",ALLOC_NORMAL);D=allocate([115,116,114,117,99,116,95,103,114,111,117,112,0],"i8",ALLOC_NORMAL);HEAP[n]=d;HEAP[n+4]=f;HEAP[n+8]=g;HEAP[n+12]=h;HEAP[n+16]=j;HEAP[n+20]=k;HEAP[n+24]=l;HEAP[n+28]=m;HEAP[p]=r;HEAP[p+4]=o;HEAP[p+8]=n;HEAP[F]=v;HEAP[F+4]=c+2;HEAP[F+12]=y;HEAP[F+16]=w;HEAP[F+20]=c+4;HEAP[F+28]=x;HEAP[F+32]=B;HEAP[F+36]=c+6;HEAP[F+44]=z}var b={arguments:[]};Runtime.QUANTUM_SIZE=4;var d,f,g,h,j,k,l,m,n,o,p,r,q,s,u,v,y,w,x,B,z,F,
I,N,G,D;b._initgrp=function(){var a,b;a=_Py_InitModule4(N,F,I,0,1013);if((a==0?4:1)==1)b=_PyModule_GetDict(a),a=HEAP[G]==0?2:3,a==2&&_PyStructSequence_InitType(q,p),_PyDict_SetItemString(b,D,q),HEAP[G]=1};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,0,function(a,b){var c,d,f,g;f=_PyNumber_Int(b);c=f==0?1:2;if(c==1)d=0;else if(c==2){g=HEAP[f+8];HEAP[f]-=1;c=HEAP[f]==0?3:4;if(c==3)FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);f=_getgrgid(g);c=f==0?5:6;c==5?(_PyErr_Format(HEAP[_PyExc_KeyError],s,allocate([g,0,0,
0],["i32",0,0,0],ALLOC_STACK)),d=0):c==6&&(d=e(f))}return d},0,function(a,b){var c,d,f,g,h;f=_PyObject_Str(b);c=f==0?1:2;if(c==1)d=0;else if(c==2)if(g=f+20,h=_getgrnam(g),c=h==0?3:6,c==3){_PyErr_Format(HEAP[_PyExc_KeyError],u,allocate([g,0,0,0],["i8*",0,0,0],ALLOC_STACK));HEAP[f]-=1;c=HEAP[f]==0?4:5;if(c==4)FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);d=0}else if(c==6){HEAP[f]-=1;c=HEAP[f]==0?7:8;if(c==7)FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);d=e(h)}return d},0,function(){var a,b,c,d;c=_PyList_New(0);a=c==
0?1:2;a:do if(a==1)b=0;else if(a==2){_setgrent();b:for(;;){a=b=_getgrent();if(b==0){a=14;break b}d=e(a);if(d==0){a=8;break b}a=_PyList_Append(c,d);var f=d;if(a!=0){a=5;break b}HEAP[d]=HEAP[f]-1;if(HEAP[d]!=0){a=13;continue b}FUNCTION_TABLE[HEAP[HEAP[d+4]+24]](d);a=13}b:do if(a==14){_endgrent();b=c;break a}else if(a==5){if(f==0)break b;HEAP[d]-=1;if(HEAP[d]!=0)break b;FUNCTION_TABLE[HEAP[HEAP[d+4]+24]](d)}while(0);HEAP[c]-=1;a=HEAP[c]==0?9:10;if(a==9)FUNCTION_TABLE[HEAP[HEAP[c+4]+24]](c);_endgrent();
b=0}while(0);return b},0]);b.run=a;a();return b});