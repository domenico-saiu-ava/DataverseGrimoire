---
logical: "msdyn_duplicateleadmapping"
display: "Duplicate Lead Mapping"
entitySetName: "msdyn_duplicateleadmappings"
primaryId: "msdyn_duplicateleadmappingid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Duplicate Lead Mapping

This enity is used to connect base lead to duplicate leads

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_duplicateleadmapping` |
| Display name | Duplicate Lead Mapping |
| Display (plural) | Duplicate Lead Mappings |
| Schema name | `msdyn_duplicateleadmapping` |
| Entity set (Web API) | `msdyn_duplicateleadmappings` |
| Primary id attribute | `msdyn_duplicateleadmappingid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_duplicateleadmappings?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_duplicateleadmappings(<guid>)
POST /api/data/v9.2/msdyn_duplicateleadmappings
PATCH /api/data/v9.2/msdyn_duplicateleadmappings(<guid>)
DELETE /api/data/v9.2/msdyn_duplicateleadmappings(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_baseleadrecord`, `msdyn_dismissalreason`, `msdyn_dismissedat`, `msdyn_dismissedby`, `msdyn_duplicateleadmappingId`, `msdyn_duplicateleadrecord`, `msdyn_name`, `msdyn_parsedreason`, `msdyn_reason`, `msdyn_score`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_duplicateleadmapping` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_duplicateleadmapping_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_duplicateleadmapping_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_duplicateleadmapping_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_duplicateleadmapping_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_lead_msdyn_duplicateleadmapping` | [lead](lead.md) | `msdyn_duplicateleadrecord` | `msdyn_duplicateleadrecord` |
| `msdyn_lead_msdyn_duplicateleadmapping_BaseLeadRecord` | [lead](lead.md) | `msdyn_baseleadrecord` | `msdyn_baseleadrecord` |
| `msdyn_systemuser_msdyn_duplicateleadmapping_DismissedBy` | [systemuser](systemuser.md) | `msdyn_dismissedby` | `msdyn_DismissedBy` |
| `owner_msdyn_duplicateleadmapping` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_duplicateleadmapping` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_duplicateleadmapping` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_duplicateleadmapping_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicateleadmapping_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicateleadmapping_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_duplicateleadmapping_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_duplicateleadmapping_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicateleadmapping_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_duplicateleadmapping_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_duplicateleadmapping_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_duplicateleadmapping.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_duplicateleadmapping.md) on 2026-05-06.