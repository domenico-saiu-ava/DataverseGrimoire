---
logical: "sdkmessage"
display: "Sdk Message"
entitySetName: "sdkmessages"
primaryId: "sdkmessageid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Sdk Message

Message that is supported by the SDK.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `sdkmessage` |
| Display name | Sdk Message |
| Display (plural) | Sdk Messages |
| Schema name | `SdkMessage` |
| Entity set (Web API) | `sdkmessages` |
| Primary id attribute | `sdkmessageid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/sdkmessages?$select=name&$top=10
GET /api/data/v9.2/sdkmessages(<guid>)
POST /api/data/v9.2/sdkmessages
PATCH /api/data/v9.2/sdkmessages(<guid>)
DELETE /api/data/v9.2/sdkmessages(<guid>)
```

## Attributes

Writable: **12** · Read-only: **18**

### Writable

`AutoTransact`, `Availability`, `CategoryName`, `ExecutePrivilegeName`, `Expand`, `IntroducedVersion`, `IsActive`, `IsPrivate`, `IsReadOnly`, `Name`, `SdkMessageId`, `Template`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `CustomizationLevel`, `IsManaged`, `IsValidForExecuteAsync`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `OverwriteTime`, `SdkMessageIdUnique`, `SolutionId`, `SupportingSolutionId`, `ThrottleSettings`, `VersionNumber`, `WorkflowSdkStepEnabled`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `createdby_sdkmessage` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_sdkmessage_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_sdkmessage_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `modifiedby_sdkmessage` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `organization_sdkmessage` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (4)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `sdkmessage_customapi` | _n/a_ | `sdkmessageid` | _n/a_ |
| `sdkmessage_serviceplanmapping` | _n/a_ | `sdkmessage` | _n/a_ |
| `sdkmessageid_sdkmessagefilter` | _n/a_ | `sdkmessageid` | _n/a_ |
| `sdkmessageid_sdkmessageprocessingstep` | _n/a_ | `sdkmessageid` | _n/a_ |


## Source

Generated from [sdkmessage.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/sdkmessage.md) on 2026-05-06.