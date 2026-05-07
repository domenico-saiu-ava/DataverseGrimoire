---
logical: "msdyn_mostcontacted"
display: "Contattato principalmente"
entitySetName: "msdyn_mostcontacteds"
primaryId: "msdyn_mostcontactedid"
primaryName: "msdyn_primaryname"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Contattato principalmente

Contattato principalmente

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_mostcontacted` |
| Display name | Contattato principalmente |
| Display (plural) | Contattato principalmente |
| Schema name | `msdyn_mostcontacted` |
| Entity set (Web API) | `msdyn_mostcontacteds` |
| Primary id attribute | `msdyn_mostcontactedid` |
| Primary name attribute | `msdyn_primaryname` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_mostcontacteds?$select=msdyn_primaryname&$top=10
GET /api/data/v9.2/msdyn_mostcontacteds(<guid>)
POST /api/data/v9.2/msdyn_mostcontacteds
PATCH /api/data/v9.2/msdyn_mostcontacteds(<guid>)
DELETE /api/data/v9.2/msdyn_mostcontacteds(<guid>)
```

## Attributes

Writable: **28** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_account_regardingobjectid`, `msdyn_computationaccuracy`, `msdyn_contact_regardingobjectid`, `msdyn_entityid`, `msdyn_entityimage_url`, `msdyn_entityname`, `msdyn_kpidatajson`, `msdyn_lastcontactedby`, `msdyn_lastcontactedon`, `msdyn_lead_regardingobjectid`, `msdyn_mostcontactedid`, `msdyn_name`, `msdyn_numberofemails`, `msdyn_numberofinmails`, `msdyn_numberofmeetings`, `msdyn_numberofphonecalls`, `msdyn_opportunity_regardingobjectid`, `msdyn_primaryname`, `msdyn_regardingentityid`, `msdyn_regardingentityname`, `msdyn_relationshiphealthscorecolor`, `msdyn_relationshiphealthscorevalue`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_mostcontacted_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_mostcontacted_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_mostcontacted_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_mostcontacted_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_mostcontacted` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_account_msdyn_mostcontacted_regardingObjectId` | [account](account.md) | `msdyn_account_regardingobjectid` | `msdyn_account_regardingObjectId` |
| `msdyn_contact_msdyn_mostcontacted_regardingObjectId` | [contact](contact.md) | `msdyn_contact_regardingobjectid` | `msdyn_contact_regardingObjectId` |
| `msdyn_lead_msdyn_mostcontacted_regardingObjectId` | [lead](lead.md) | `msdyn_lead_regardingobjectid` | `msdyn_lead_regardingObjectId` |
| `msdyn_opportunity_msdyn_mostcontacted_regardingObjectId` | [opportunity](opportunity.md) | `msdyn_opportunity_regardingobjectid` | `msdyn_opportunity_regardingObjectId` |

### One-to-Many (7)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_mostcontacted_SyncErrors` | [msdyn_mostcontacted](msdyn_mostcontacted.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontacted` |
| `msdyn_mostcontacted_AsyncOperations` | [msdyn_mostcontacted](msdyn_mostcontacted.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontacted` |
| `msdyn_mostcontacted_MailboxTrackingFolders` | [msdyn_mostcontacted](msdyn_mostcontacted.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontacted` |
| `msdyn_mostcontacted_UserEntityInstanceDatas` | [msdyn_mostcontacted](msdyn_mostcontacted.md) | `objectid` | `objectid_msdyn_mostcontacted` |
| `msdyn_mostcontacted_ProcessSession` | [msdyn_mostcontacted](msdyn_mostcontacted.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontacted` |
| `msdyn_mostcontacted_BulkDeleteFailures` | [msdyn_mostcontacted](msdyn_mostcontacted.md) | `regardingobjectid` | `regardingobjectid_msdyn_mostcontacted` |
| `msdyn_mostcontacted_PrincipalObjectAttributeAccesses` | [msdyn_mostcontacted](msdyn_mostcontacted.md) | `objectid` | `objectid_msdyn_mostcontacted` |


## Source

Generated from [msdyn_mostcontacted (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_mostcontacted')) on 2026-05-07.