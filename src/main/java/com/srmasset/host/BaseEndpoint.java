package com.srmasset.host;

import java.net.URI;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

public abstract class BaseEndpoint {
 
    public static final String X_TOTAL_COUNT = "X-Total-Count";
    public static final String X_UPDATE_AT = "X-Update-At";
	
	protected BodyBuilder ok() {
		return ResponseEntity.ok();
	}

	protected URI recuperarLocation(final String path, final Object identificador) {
		return ServletUriComponentsBuilder.fromCurrentRequest().path(path).buildAndExpand(identificador).toUri();
	}

	protected ResponseEntity<Void> getPutSuccessReturn() {
		return ResponseEntity.status(HttpStatus.NO_CONTENT)
				.header(X_UPDATE_AT, String.valueOf(System.currentTimeMillis())).build();
	}

	protected ResponseEntity<Void> getDeleteSuccessReturn() {
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

	protected BodyBuilder getPostSuccessReturn(final URI location) {
		return ResponseEntity.status(HttpStatus.CREATED).location(location);
	}
}
