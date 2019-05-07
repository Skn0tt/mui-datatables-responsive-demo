This is a demo for the `customRowRender` feature request for [mui-datatables](https://github.com/gregnb/mui-datatables).

It shows how you can effectively fit wide data on a narrow screen.
Play around with the demo (you can find it at [https://mui-datatables-responsive-demo.skn0tt.now.sh](https://mui-datatables-responsive-demo.skn0tt.now.sh)), compare "stacked" mode and the card display.

You may ask yourself: I can have the same space usage using the "stacked" mode, so why do I need this?

I find the "stacked" mode to be hard to use on a small, cramped screen, since the text is too small and - well, the data ist stacked.
See, tables are great because you can focus on just one column and scan through it until you find the row you search for.
This can not be done in stacked mode since there are no more rows.

`customRowRender` allows you to have your own rendering for a row.
Through this, you can create a Card-Like UI where each column has its own location.
With the credit card in this example, it's the way the numbers are located that allow you to quickly pattern-match against them to find what you're searching.

You may now ask yourself: You could just use a normal list for this, why do you need a table?

I still want to use the sorting and filtering system of mui-datatables, because my users know it.
I don't want them to feel like they enter a different view in my app - just the presentation of the table rows should be changed.

As you see, having a custom row-view for small screens can make UX for your apps a lot better.
This is why I'd love to see `customRowRender` in `mui-datatables`! :smile: