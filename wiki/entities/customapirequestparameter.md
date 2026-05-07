---
logical: "customapirequestparameter"
display: "Custom API Request Parameter"
entitySetName: "customapirequestparameters"
primaryId: "customapirequestparameterid"
primaryName: "name"
tableType: "Standard"
ownership: "None"
---

# Custom API Request Parameter

Entity that defines a request parameter for a custom API

## Identity

| Property | Value |
| --- | --- |
| Logical name | `customapirequestparameter` |
| Display name | Custom API Request Parameter |
| Display (plural) | Custom API Request Parameters |
| Schema name | `CustomAPIRequestParameter` |
| Entity set (Web API) | `customapirequestparameters` |
| Primary id attribute | `customapirequestparameterid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/customapirequestparameters?$select=name&$top=10
GET /api/data/v9.2/customapirequestparameters(<guid>)
POST /api/data/v9.2/customapirequestparameters
PATCH /api/data/v9.2/customapirequestparameters(<guid>)
DELETE /api/data/v9.2/customapirequestparameters(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`CustomAPIId`, `CustomAPIRequestParameterId`, `Description`, `DisplayName`, `ImportSequenceNumber`, `IsCustomizable`, `IsOptional`, `LogicalEntityName`, `Name`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `Type`, `UniqueName`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerId`, `OwnerIdType`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customapi_customapirequestparameter` | [customapi](customapi.md) | `customapiid` | `CustomAPIId` |
| `lk_customapirequestparameter_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_customapirequestparameter_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_customapirequestparameter_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_customapirequestparameter_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `customapirequestparameter_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapirequestparameter_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapirequestparameter_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapirequestparameter_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `customapirequestparameter_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `customapirequestparameter_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [customapirequestparameter.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/customapirequestparameter.md) on 2026-05-06.