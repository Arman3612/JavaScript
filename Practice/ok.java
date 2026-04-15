class Test{
    public static void main(String[] om){
        StringBuilder sb=new StringBuilder();
        System.out.println(sb.length());
        System.out.println(sb.capacity()); 
        System.out.println("String builder value : "+sb);
        sb.append("Java");
        System.out.println(sb.capacity()); 
        sb.append(" Programing");
        System.out.println("String builder value : "+sb);
        
        sb.insert(5,"CSE");
        System.out.println("After insert String builder value : "+sb);
        
        sb.replace(5,8,"LPU");
        System.out.println("After replace 5 to 8 String builder value : "+sb);
        
        sb.delete(5,8);
        System.out.println("After deleting 5 to 8 String builder value : "+sb);
        
        sb.deleteCharAt(1);
        System.out.println("After deleting at index 1 String builder value : "+sb);
        
    }
}