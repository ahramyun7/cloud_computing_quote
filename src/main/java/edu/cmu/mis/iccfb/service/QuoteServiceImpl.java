package edu.cmu.mis.iccfb.service;

import java.util.ArrayList;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;

import edu.cmu.mis.iccfb.model.Quote;
import edu.cmu.mis.iccfb.model.Author;


public class QuoteServiceImpl implements QuoteServiceCustom {

    Random random = new Random();
    
    @Autowired
    private QuoteService quoteService;
    
    @Override
    public Quote randomQuote() {
        ArrayList<Quote> quotes = new ArrayList<Quote>();
        
        for (Quote q: this.quoteService.findAll() ) {
            quotes.add(q);
        }
        Quote q = quotes.get(random.nextInt(quotes.size()));
        return q;
    }

   @Override
   public Quote QuoteByAuthor(String authorName) {
        System.out.println("QuotebyAuthor : " + authorName);
        StringBuilder sb = new StringBuilder();
        String source = "";
        Author a = null;
        int count = 1;
        
        for (Quote q: this.quoteService.findAll() ) {
            if(q.getAuthor().getName().equals(authorName)) {
                sb.append("[Quote " + count + "] " + q.getText()+ "\n");
                source = q.getSource();
                a = q.getAuthor();
                count++;
            }
        }
        Quote final_q = new Quote(sb.toString(), source, a);
        System.out.println("result = " + sb.toString());
        return final_q;
    }
}
