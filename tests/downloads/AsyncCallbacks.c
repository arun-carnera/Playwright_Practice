//Automatically generated file for implementing asynchronous callback functions.
//You can modify the automatically generated callback implementations or add new ones.
//Asynchronous callback functions can be registered using web_reg_async_attributes steps.
int LongPoll_0_RequestCB()
{
	//Enter your implementation for RequestCB() here.

	//Call web_util_set_request_url() here to modify polling URL.
	//URL is expected to be of the form:
	//https://mail.google.com/mail/u/0/?ui=2&ik=b5cc0a2faf&jsver=aUHgQOE3aQI.en.L.es5&cbl=gmail.pinto-server_20250908.02_p1&rid={Unknown_LongPoll_0_0}&view=up&act=oetsha&_reqid={Unknown_LongPoll_0_1}&at=AF6bupNdnSKMwGUIpuAlC-0X56Ss7Ktchg&nsc=1&mb=0&rt=j

	//The following parameters must be assigned:

	//TODO - Implement parameter of unknown type: Unknown_LongPoll_0_0.
	//Known examples for Unknown_LongPoll_0_0: rid=mail:i.ad8e.1.1, rid=mail:i.ad8e.1.2, rid=mail:i.ad8e.1.3, rid=mail:i.ad8e.1.5, rid=ad8e.., rid=ad8e.., rid=ad8e.., 
	lr_save_string("mail:i.ad8e.1.1","Unknown_LongPoll_0_0");

	//TODO - Implement parameter of unknown type: Unknown_LongPoll_0_1.
	//Known examples for Unknown_LongPoll_0_1: _reqid=257465, _reqid=357465, _reqid=457465, _reqid=657465, _reqid=857465, _reqid=957465, _reqid=1057465, 
	lr_save_string("257465","Unknown_LongPoll_0_1");

	//Once all parameters have been assigned, copy them to the updated URL.
	//Then call web_util_set_request_url() with the updated URL:
	web_util_set_request_url("https://mail.google.com/mail/u/0/?ui=2&ik=b5cc0a2faf&jsver=aUHgQOE3aQI.en.L.es5&cbl=gmail.pinto-server_20250908.02_p1&rid={Unknown_LongPoll_0_0}&view=up&act=oetsha&_reqid={Unknown_LongPoll_0_1}&at=AF6bupNdnSKMwGUIpuAlC-0X56Ss7Ktchg&nsc=1&mb=0&rt=j");

	//Call web_util_set_request_body() here to modify request body:
	//TODO - Use snapshot view to see examples of request bodies sent.
	//web_util_set_request_body("<request body>");

	//Call web_util_set_request_header() here to modify request header:
	//web_util_set_request_header("<header>","<content>");

	return WEB_ASYNC_CB_RC_OK;
}

int LongPoll_0_ResponseCB(
	const char *	aResponseHeadersStr,
	int				aResponseHeadersLen,
	const char *	aResponseBodyStr,
	int				aResponseBodyLen,
	int				aHttpStatusCode)
{
	//Enter your implementation for ResponseCB() here.

	//TODO - To make the script wait for a specific response, use web_sync in the relevant Action file.
	//See the Modifying Callbacks section in the VuGen user guide for more details.

	return WEB_ASYNC_CB_RC_OK;
}

