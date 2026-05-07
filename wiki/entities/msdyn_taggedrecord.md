---
logical: "msdyn_taggedrecord"
display: "Tagged Record"
entitySetName: "msdyn_taggedrecords"
primaryId: "msdyn_taggedrecordid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Tagged Record

Tagged Record - M365 Copilot Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_taggedrecord` |
| Display name | Tagged Record |
| Display (plural) | Tagged Records |
| Schema name | `msdyn_taggedrecord` |
| Entity set (Web API) | `msdyn_taggedrecords` |
| Primary id attribute | `msdyn_taggedrecordid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_taggedrecords?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_taggedrecords(<guid>)
POST /api/data/v9.2/msdyn_taggedrecords
PATCH /api/data/v9.2/msdyn_taggedrecords(<guid>)
DELETE /api/data/v9.2/msdyn_taggedrecords(<guid>)
```

## Attributes

Writable: **18** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_connectionid`, `msdyn_crmrecordid`, `msdyn_dynamicsrecordid`, `msdyn_dynamicsrecordidIdType`, `msdyn_emailid`, `msdyn_name`, `msdyn_producttype`, `msdyn_recordtype`, `msdyn_taggedrecordId`, `msdyn_userid`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_taggedrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_taggedrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_taggedrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_taggedrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_taggedrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_crmconnection_msdyn_taggedrecord_connectionid` | [msdyn_crmconnection](msdyn_crmconnection.md) | `msdyn_connectionid` | `msdyn_connectionid` |
| `msdyn_msdyn_taggedrecord_contact_msdyn_dynamicsrecordid` | [contact](contact.md) | `msdyn_dynamicsrecordid` | `msdyn_dynamicsrecordid_contact` |
| `msdyn_msdyn_taggedrecord_lead_msdyn_dynamicsrecordid` | [lead](lead.md) | `msdyn_dynamicsrecordid` | `msdyn_dynamicsrecordid_lead` |
| `owner_msdyn_taggedrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_taggedrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_taggedrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_taggedrecord_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_taggedrecord_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_taggedrecord_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_taggedrecord_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_taggedrecord_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_taggedrecord_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_taggedrecord_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_taggedrecord_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_taggedrecord_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_taggedrecord.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_taggedrecord.md) on 2026-05-06.