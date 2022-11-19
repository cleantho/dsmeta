package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRepository repository;

	public String sendSms(Long id) {
		Sale sale = repository.findById(id).get();

		int month = sale.getDate().getMonthValue();
		String date = (month < 10 ? "0" + month : month) + "/" + sale.getDate().getYear();

		String msn = "O vendedor " + sale.getSellerName() + " foi destaque em " + date + " com um total de R$ "
				+ String.format("%.2f", sale.getAmount()) + ".";

		Twilio.init(twilioSid, twilioKey);
		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msn).create();

		System.out.println(message.getSid());
		System.out.println(message.getBody());
		
		return message.getBody();
	}
}
