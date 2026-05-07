---
logical: "msdyn_mostcontactedby"
display: "Most Contacted By"
entitySetName: "msdyn_mostcontactedbies"
primaryId: "msdyn_mostcontactedbyid"
primaryName: "msdyn_primaryname"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Most Contacted By

Most Contacted By

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_mostcontactedby` |
| Display name | Most Contacted By |
| Display (plural) | Most Contacted By |
| Schema name | `msdyn_mostcontactedby` |
| Entity set (Web API) | `msdyn_mostcontactedbies` |
| Primary id attribute | `msdyn_mostcontactedbyid` |
| Primary name attribute | `msdyn_primaryname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_mostcontactedbies?$select=msdyn_primaryname&$top=10
GET /api/data/v9.2/msdyn_mostcontactedbies(<guid>)
POST /api/data/v9.2/msdyn_mostcontactedbies
PATCH /api/data/v9.2/msdyn_mostcontactedbies(<guid>)
DELETE /api/data/v9.2/msdyn_mostcontactedbies(<guid>)
```

## Attributes

Writable: **25** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_account_regardingObjectId`, `msdyn_computationaccuracy`, `msdyn_contact_regardingObjectId`, `msdyn_entityid`, `msdyn_entityImage_url`, `msdyn_entityname`, `msdyn_kpidatajson`, `msdyn_lastcontactedon`, `msdyn_lead_regardingObjectId`, `msdyn_mostcontactedbyId`, `msdyn_name`, `msdyn_numberofemails`, `msdyn_numberofinmails`, `msdyn_numberofmeetings`, `msdyn_numberofphonecalls`, `msdyn_opportunity_regardingObjectId`, `msdyn_primaryname`, `msdyn_regardingentityid`, `msdyn_regardingentityname`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_mostcontactedby_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_mostcontactedby_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_mostcontactedby_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_mostcontactedby_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_account_msdyn_mostcontactedby_regardingObjectId` | [account](account.md) | `msdyn_account_regardingobjectid` | `msdyn_account_regardingObjectId` |
| `msdyn_contact_msdyn_mostcontactedby_regardingObjectId` | [contact](contact.md) | `msdyn_contact_regardingobjectid` | `msdyn_contact_regardingObjectId` |
| `msdyn_lead_msdyn_mostcontactedby_regardingObjectId` | [lead](lead.md) | `msdyn_lead_regardingobjectid` | `msdyn_lead_regardingObjectId` |
| `msdyn_opportunity_msdyn_mostcontactedby_regardingObjectId` | [opportunity](opportunity.md) | `msdyn_opportunity_regardingobjectid` | `msdyn_opportunity_regardingObjectId` |
| `organization_msdyn_mostcontactedby` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_mostcontactedby_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontactedby_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontactedby_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontactedby_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_mostcontactedby_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_mostcontactedby_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_mostcontactedby.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_mostcontactedby.md) on 2026-05-06.