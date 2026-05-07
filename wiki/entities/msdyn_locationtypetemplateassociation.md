---
logical: "msdyn_locationtypetemplateassociation"
display: "Functional Location Type Template Association"
entitySetName: "msdyn_locationtypetemplateassociations"
primaryId: "msdyn_locationtypetemplateassociationid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Functional Location Type Template Association

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_locationtypetemplateassociation` |
| Display name | Functional Location Type Template Association |
| Display (plural) | Functional Location Type Template Association |
| Schema name | `msdyn_locationtypetemplateassociation` |
| Entity set (Web API) | `msdyn_locationtypetemplateassociations` |
| Primary id attribute | `msdyn_locationtypetemplateassociationid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_locationtypetemplateassociations?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_locationtypetemplateassociations(<guid>)
POST /api/data/v9.2/msdyn_locationtypetemplateassociations
PATCH /api/data/v9.2/msdyn_locationtypetemplateassociations(<guid>)
DELETE /api/data/v9.2/msdyn_locationtypetemplateassociations(<guid>)
```

## Attributes

Writable: **12** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_functionallocationtype`, `msdyn_locationtypetemplateassociationId`, `msdyn_name`, `msdyn_propertytemplate`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_locationtypetemplateassociation` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_locationtypetemplateassociation_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_locationtypetemplateassociation_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_locationtypetemplateassociation_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_locationtypetemplateassociation_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_functionallocationtype_msdyn_locationtypetemplateassociation_functionallocationtype` | [msdyn_functionallocationtype](msdyn_functionallocationtype.md) | `msdyn_functionallocationtype` | `msdyn_functionallocationtype` |
| `msdyn_msdyn_templateforproperties_msdyn_locationtypetemplateassociation_propertytemplate` | [msdyn_templateforproperties](msdyn_templateforproperties.md) | `msdyn_propertytemplate` | `msdyn_propertytemplate` |
| `owner_msdyn_locationtypetemplateassociation` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_locationtypetemplateassociation` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_locationtypetemplateassociation` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_locationtypetemplateassociation_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtypetemplateassociation_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtypetemplateassociation_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtypetemplateassociation_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_locationtypetemplateassociation_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_locationtypetemplateassociation_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_locationtypetemplateassociation.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_locationtypetemplateassociation.md) on 2026-05-06.