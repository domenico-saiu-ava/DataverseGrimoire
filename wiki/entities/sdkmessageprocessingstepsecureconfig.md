---
logical: "sdkmessageprocessingstepsecureconfig"
display: "Sdk Message Processing Step Secure Configuration"
entitySetName: "sdkmessageprocessingstepsecureconfigs"
primaryId: "sdkmessageprocessingstepsecureconfigid"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sdk Message Processing Step Secure Configuration

Non-public custom configuration that is passed to a plug-in's constructor.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sdkmessageprocessingstepsecureconfig` |
| Display name | Sdk Message Processing Step Secure Configuration |
| Display (plural) | Sdk Message Processing Step Secure Configurations |
| Schema name | `SdkMessageProcessingStepSecureConfig` |
| Entity set (Web API) | `sdkmessageprocessingstepsecureconfigs` |
| Primary id attribute | `sdkmessageprocessingstepsecureconfigid` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sdkmessageprocessingstepsecureconfigs?$select=&$top=10
GET /api/data/v9.2/sdkmessageprocessingstepsecureconfigs(<guid>)
POST /api/data/v9.2/sdkmessageprocessingstepsecureconfigs
PATCH /api/data/v9.2/sdkmessageprocessingstepsecureconfigs(<guid>)
DELETE /api/data/v9.2/sdkmessageprocessingstepsecureconfigs(<guid>)
```

## Attributes

Writable: **2** · Read-only: **9**

### Writable

`SdkMessageProcessingStepSecureConfigId`, `SecureConfig`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomizationLevel`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `SdkMessageProcessingStepSecureConfigIdUnique`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_sdkmessageprocessingstepsecureconfig` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sdkmessageprocessingstepsecureconfig_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sdkmessageprocessingstepsecureconfig_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_sdkmessageprocessingstepsecureconfig` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_sdkmessageprocessingstepsecureconfig` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep` | _n/a_ | `sdkmessageprocessingstepsecureconfigid` | _n/a_ |


## Source

Generated from [sdkmessageprocessingstepsecureconfig.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sdkmessageprocessingstepsecureconfig.md) on 2026-05-06.