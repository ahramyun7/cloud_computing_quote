package edu.cmu.mis.iccfb.service;

import edu.cmu.mis.iccfb.model.Quote;

public interface QuoteServiceCustom {
    public Quote randomQuote();
    public Quote QuoteByAuthor(String authorName);
}
