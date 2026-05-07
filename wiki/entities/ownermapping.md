---
logical: "ownermapping"
display: "Owner Mapping"
entitySetName: "ownermappings"
primaryId: "ownermappingid"
tableType: "Standard"
ownership: "None"
---

# Owner Mapping

In a data map, maps ownership data from the source file to Microsoft Dynamics 365.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `ownermapping` |
| Display name | Owner Mapping |
| Display (plural) | Owner Mappings |
| Schema name | `OwnerMapping` |
| Entity set (Web API) | `ownermappings` |
| Primary id attribute | `ownermappingid` |
| Table type | Standard |
| Ownership | None |

## Web API examples

```http
GET /api/data/v9.2/ownermappings?$select=&$top=10
GET /api/data/v9.2/ownermappings(<guid>)
POST /api/data/v9.2/ownermappings
PATCH /api/data/v9.2/ownermappings(<guid>)
DELETE /api/data/v9.2/ownermappings(<guid>)
```

## Attributes

Writable: **10** · Read-only: **13**

### Writable

`ImportMapId`, `IntroducedVersion`, `OwnerMappingId`, `ProcessCode`, `SourceSystemUserName`, `SourceUserValueForSourceCRMUserLink`, `StatusCode`, `TargetSystemUserDomainName`, `TargetSystemUserId`, `TargetUserValueForSourceCRMUserLink`

### Read-only

`ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerMappingIdUnique`, `SolutionId`, `StateCode`, `SupportingSolutionId`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_ownermapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_ownermapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_ownermapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_ownermapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `OwnerMapping_ImportMap` | [importmap](importmap.md) | `importmapid` | `importmapid` |
| `OwnerMapping_SystemUser` | [systemuser](systemuser.md) | `targetsystemuserid` | `targetsystemuserid` |



## Source

Generated from [ownermapping.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/ownermapping.md) on 2026-05-06.