---
logical: "serviceendpoint"
display: "Service Endpoint"
entitySetName: "serviceendpoints"
primaryId: "serviceendpointid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Service Endpoint

Service endpoint that can be contacted.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `serviceendpoint` |
| Display name | Service Endpoint |
| Display (plural) | Service Endpoints |
| Schema name | `ServiceEndpoint` |
| Entity set (Web API) | `serviceendpoints` |
| Primary id attribute | `serviceendpointid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/serviceendpoints?$select=name&$top=10
GET /api/data/v9.2/serviceendpoints(<guid>)
POST /api/data/v9.2/serviceendpoints
PATCH /api/data/v9.2/serviceendpoints(<guid>)
DELETE /api/data/v9.2/serviceendpoints(<guid>)
```

## Attributes

Writable: **25** · Read-only: **16**

### Writable

`AuthType`, `AuthValue`, `ConnectionMode`, `Contract`, `Description`, `IntroducedVersion`, `IsCustomizable`, `KeyVaultReferenceId`, `ManagedIdentityId`, `MessageCharset`, `MessageFormat`, `Name`, `NamespaceAddress`, `NamespaceFormat`, `Path`, `RuntimeIntegrationProperties`, `SASKey`, `SASKeyName`, `SASToken`, `SchemaType`, `ServiceEndpointId`, `SolutionNamespace`, `Url`, `UseKeyVaultConfiguration`, `UserClaim`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsAuthValueSet`, `IsManaged`, `IsSASKeySet`, `IsSASTokenSet`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `ServiceEndpointIdUnique`, `SolutionId`, `SupportingSolutionId`

## Relationships

### Many-to-One (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_serviceendpoint` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `keyvaultreference_ServiceEndpoint` | [keyvaultreference](keyvaultreference.md) | `keyvaultreferenceid` | `keyvaultreferenceid` |
| `lk_serviceendpointbase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_serviceendpointbase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `managedidentity_ServiceEndpoint` | [managedidentity](managedidentity.md) | `managedidentityid` | `managedidentityid` |
| `modifiedby_serviceendpoint` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_serviceendpoint` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (1)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `serviceendpoint_sdkmessageprocessingstep` | _n/a_ | `eventhandler` | _n/a_ |


## Source

Generated from [serviceendpoint.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/serviceendpoint.md) on 2026-05-06.