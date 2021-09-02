x=[1,2,4,8,16,32,64];
y=[4669,1166,268,62,13,3,1];
p = polyfit(log(x),log(y),1);
y1=polyval(p,log(x));
plot(log(x),log(y),'*');
hold on;
plot(log(x),y1,'r')